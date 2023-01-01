import locations from '../../jsonfiles/Location.json';

export default function location(req, res) {
    res.status(200).json(locations)
  }
  