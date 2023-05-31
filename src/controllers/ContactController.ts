import express from 'express';

const contactRouter = express.Router();

contactRouter.post('/identify', async (req, res) => {
  try {
    const response = {success:true, message:'Success'};
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send('An error occurred while processing your request.');
  }
});

export default contactRouter;
