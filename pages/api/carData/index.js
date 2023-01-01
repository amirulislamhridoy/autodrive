import data from '../../../jsonfiles/carData.json';

export default function carData(req, res) {
    res.status(200).json(data)
  }
  