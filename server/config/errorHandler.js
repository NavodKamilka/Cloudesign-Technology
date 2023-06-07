export const handleError = (req, res, error) => {
    res.json({
      success: false,
      message: error,
    });
  };