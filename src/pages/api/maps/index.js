import { getMapEmbedUrl } from '../../../../utils/helpers/getMapUrl'


export default async function handler(req, res) {
    const { url, zoom } = req.query

    if (!url) {
        return res.status(400).json({ error: 'URL is required' })
    }

    try {
        // Tambah zoom ke URL jika ada
        const urlWithZoom = zoom ? `${url}${url.includes('?') ? '&' : '?'}z=${zoom}` : url
        const embed = await getMapEmbedUrl(urlWithZoom)

        if (!embed) {
            throw new Error('Failed to generate embed URL')
        }

        return res.json({ embed, success: true })
    } catch (error) {
        return res.status(500).json({
            error: 'Failed to process map URL',
            message: error.message,
            success: false
        })
    }
}