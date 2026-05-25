document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. SISTEMA DE ALTERNÂNCIA DE ABAS (TABS)
    // ==========================================
    const menuButtons = document.querySelectorAll('.menu-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove classe ativa de todos os botões e adiciona ao atual
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Oculta todas as abas e exibe a selecionada com animação
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                    // Scroll suave para o início da página ao trocar de aba no mobile
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });

    // ==========================================
    // 2. FILTROS DA LINHA DO TEMPO INTERATIVA
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Atualiza estado ativo do botão de filtro
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtra os blocos cronológicos da linha do tempo
            timelineItems.forEach(item => {
                const itemEra = item.getAttribute('data-era');
                
                if (filterValue === 'all' || itemEra === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ==========================================
    // 3. EFEITO ACORDION (SEÇÃO DE CURIOSIDADES)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const body = currentItem.querySelector('.accordion-body');
            const isOpen = currentItem.classList.contains('open');

            // Opcional: Fecha outros itens ao abrir um novo (Comportamento Único)
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.accordion-body').style.display = 'none';
            });

            // Alterna o item atual
            if (!isOpen) {
                currentItem.classList.add('open');
                body.style.display = 'grid'; // Usa grid para alinhar o layout split interno
            } else {
                currentItem.classList.remove('open');
                body.style.display = 'none';
            }
        });
    });

    // Mantém o primeiro item do accordion aberto por padrão para convite de leitura
    if (accordionHeaders.length > 0) {
        accordionHeaders[0].click();
    }
});