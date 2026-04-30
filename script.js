const container = document.querySelector('.produtos');

function addProduto(img, nome, descricao, preco) {
    const produto = document.createElement('article');
    produto.classList.add('produto-card');
        produto.innerHTML = `
            <figure class="produto-card__imagem">
                <img src="${img}"alt="${nome}""class="produto-card__img"loading="lazy"/>
            </figure>
            <div class="produto-card__info">
                <h2 class="produto-card__nome">${nome}</h2>
                <p class="produto-card__descricao">${descricao}</p>
                <span class="produto-card__preco-valor">${preco}</span>
            </div>
        `;
    container.appendChild(produto);
}

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 1',
    'Descrição do produto 1',
    'R$ 100,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 2',
    'Descrição do produto 2',
    'R$ 200,00'
);  

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 3',
    'Descrição do produto 3',
    'R$ 300,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 4',
    'Descrição do produto 4',
    'R$ 400,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 5',
    'Descrição do produto 5',
    'R$ 100,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 6',
    'Descrição do produto 6',
    'R$ 100,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 7',
    'Descrição do produto 7',
    'R$ 100,00'
);

addProduto(
    'https://images.unsplash.com/photo-1523278334080-e456c10e04cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Produto 8',
    'Descrição do produto 8',
    'R$ 100,00'
);