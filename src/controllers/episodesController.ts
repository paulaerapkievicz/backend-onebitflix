import { Request, Response } from 'express'
import { episodeService } from '../services/episodeService'

export const episodesController = {
  // GET /episodes/stream
  stream: async (req: Request, res: Response) => {
	const { videoUrl } = req.query

    try {
      if (typeof videoUrl !== 'string') throw new Error('videoUrl deve ser do tipo \'string\'')
      
      const range = req.headers.range //carrega o video em blocos (Exemplo formato: bytes=0-1024)
      
      episodeService.streamEpisodeToResponse(res, videoUrl, range)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}