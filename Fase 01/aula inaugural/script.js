document.getElementById("groupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const names = [
    e.target.name1.value.trim(),
    e.target.name2.value.trim(),
    e.target.name3.value.trim(),
    e.target.name4.value.trim(),
    e.target.name5.value.trim(),
  ].filter((name) => name !== "");

  const message = e.target.message.value.trim();

  const payload = {
    names,
    message,
  };

  try {
    const response = await fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso!");
      e.target.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  } catch (error) {
    alert("Erro de rede. Tente novamente mais tarde.");
    console.error(error);
  }
});