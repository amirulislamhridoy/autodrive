import locations from '../../database/Location.json';

export default function location(req, res) {
    res.status(200).json(locations)
  }
  