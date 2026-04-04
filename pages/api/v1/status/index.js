function status(request, response) {
  response.status(200).json({ chave: "Joga Muito jão!" });
}

export default status;
