const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await const car = cars.getById(req.params.id)
      if (car) {
        req.car = car
        next()
      } else {
        res.status(404).json({
          message: `car with id ${req.params.id} not found`,
        })
      }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.payload.vin) {
    return res.status(400).json({
      message: 
    })
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
