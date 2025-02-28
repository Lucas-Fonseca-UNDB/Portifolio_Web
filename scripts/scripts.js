// Botão Voltar ao Topo
window.onscroll = function() {
    const btnTopo = document.getElementById('btn-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
};

document.getElementById('btn-topo').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});