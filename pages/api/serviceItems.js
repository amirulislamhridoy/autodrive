import serviceItemsAll from '../../jsonfiles/services.json';

export default function serviceItems(req, res) {
    res.status(200).json(serviceItemsAll)
  }
  