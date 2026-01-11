// lib/maps.js

export async function getMapEmbedUrl(googleMapsUrl) {
    if (!googleMapsUrl) {
        return null
    }

    try {
        // Follow redirects
        const response = await fetch(googleMapsUrl, {
            redirect: 'follow',
            headers: { 'User-Agent': 'Mozilla/5.0' }
        })
        const finalUrl = response.url

        // Extract custom zoom
        const urlObj = new URL(googleMapsUrl)
        const customZoom = urlObj.searchParams.get('z')
        let zoomLevel = 17

        if (customZoom) {
            zoomLevel = Math.min(Math.max(parseInt(customZoom), 10), 20)
        }

        // Method 1: Extract Place Name
        const placeMatch = finalUrl.match(/\/maps\/place\/([^\/]+)\//)
        if (placeMatch) {
            const placeName = decodeURIComponent(placeMatch[1].replace(/\+/g, ' '))

            if (!customZoom) {
                const urlZoomMatch = finalUrl.match(/,(\d+\.?\d*)z/)
                if (urlZoomMatch) {
                    zoomLevel = Math.min(Math.max(parseInt(urlZoomMatch[1]), 10), 20)
                }
            }

            return `https://maps.google.com/maps?q=${encodeURIComponent(placeName)}&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`
        }

        // Method 2: Extract coordinates
        const coordMatch = finalUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d*)z/)
        if (coordMatch) {
            const [, lat, lng, urlZoom] = coordMatch

            if (!customZoom) {
                zoomLevel = Math.min(Math.max(parseInt(urlZoom), 10), 20)
            }

            return `https://maps.google.com/maps?q=${lat},${lng}&ll=${lat + 0.001},${lng}&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`
        }

        // Method 3: Fallback coordinates
        const altCoordMatch = finalUrl.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/)
        if (altCoordMatch) {
            const [, lat, lng] = altCoordMatch
            return `https://maps.google.com/maps?q=${lat},${lng}&ll=${lat + 0.001},${lng}&t=&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`
        }

        throw new Error('Could not extract location data from URL')

    } catch (error) {
        console.error('Map embed error:', error)
        return null
    }
}