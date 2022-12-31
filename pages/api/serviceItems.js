import serviceItemsAll from '../../database/services.json';

export default function serviceItems(req, res) {
    res.status(200).json(serviceItemsAll)
  }
  