const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }

  const imagePath = `/uploads/${req.file.filename}`;
  return res.status(200).json({
    message: 'Imagem enviada com sucesso!',
    filename: req.file.filename,
    path: imagePath
  });
};

export default uploadImage;