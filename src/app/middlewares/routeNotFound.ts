import { Request, Response } from "express"

const routeNotFound = (req: Request, res: Response) => {
    res.status(404).json({
      status: 'fail',
      message: "route not found",
      error: ''
    })
  }
  
  export default routeNotFound