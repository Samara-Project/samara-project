function buildEmbedUrl(lat, lng, offset = 0.001) {
    const centerLat = lat + offset

    return `https://www.google.com/maps?q=${lat},${lng}&ll=${centerLat},${lng}&z=17&output=embed`
}
