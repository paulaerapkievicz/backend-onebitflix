import { Request, Response } from 'express'
import { episodeService } from '../services/episodeService'
import { AuthenticatedRequest } from '../middlewares/auth'

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
  },
  // GET /episodes/:id/watchTime
  getWatchTime: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const episodeId = req.params.id

    try {
      const watchTime = await episodeService.getWatchTime(userId, Number(episodeId))
      return res.json(watchTime)
    } catch (err) {
      if (err instanceof Error) {
          return res.status(400).json({ message: err.message })
      }
    }
  },

  // POST /episodes/:id/watchTime
  setWatchTime: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const episodeId = Number(req.params.id)
    const { seconds } = req.body

    try {
        const watchTime = await episodeService.setWatchTime({
            episodeId,
            userId,
            seconds
        })
        return res.json(watchTime)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  }
}