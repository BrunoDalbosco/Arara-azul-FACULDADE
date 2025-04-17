document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("nav ul li a");
    const paginaAtual = window.location.href;

    menuLinks.forEach((link) => {
      if (paginaAtual.includes(link.getAttribute("href"))) {
        link.classList.add("ativo");
      }
    });
  
    const paginas = [
      "https://brunodalbosco.github.io/Arara-azul-FACULDADE/",
      "https://brunodalbosco.github.io/carta/"
    ];
  
    let indiceAtual = paginas.findIndex((pagina) => paginaAtual.includes(pagina));
    const ul = document.getElementById("lista-paginacao");

    const btnAnterior = document.createElement("li");
    const linkAnterior = document.createElement("a");
    linkAnterior.href = "#";
    linkAnterior.id = "btn-anterior";
    linkAnterior.textContent = "«";
    btnAnterior.appendChild(linkAnterior);
    ul.appendChild(btnAnterior);

    paginas.forEach((url, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = index + 1;
      li.appendChild(a);
      ul.appendChild(li);
    });

    const btnProximo = document.createElement("li");
    const linkProximo = document.createElement("a");
    linkProximo.href = "#";
    linkProximo.id = "btn-proximo";
    linkProximo.textContent = "»";
    btnProximo.appendChild(linkProximo);
    ul.appendChild(btnProximo);

    document.getElementById("btn-anterior").addEventListener("click", (e) => {
      e.preventDefault();
      if (indiceAtual > 0) {
        window.location.href = paginas[indiceAtual - 1];
      }
    });
  
    document.getElementById("btn-proximo").addEventListener("click", (e) => {
      e.preventDefault();
      if (indiceAtual < paginas.length - 1) {
        window.location.href = paginas[indiceAtual + 1];
      }
    });
  });
  
