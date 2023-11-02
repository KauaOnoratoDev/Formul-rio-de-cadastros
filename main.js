$(document).ready(function() {
let linhas = ''

    $('form').on('submit', function(e) {
        e.preventDefault()

        const nomeCompleto = $('#nome-completo').val()
        const telefone = $('#telefone').val()
        const email = $('#email').val()
        const cpf = $('#cpf').val()
        const endereço = $('#endereço').val()
        const cep = $('#cep').val()

        let linha = '<tr>'
        linha += `<td>${nomeCompleto}</td>`
        linha += `<td>${email}</td>`
        linha += `<td>${telefone}</td>`
        linha += `<td>${cpf}</td>`
        linha += `<td>${endereço}</td>`
        linha += `<td>${cep}</td>`
        linha += '</tr>'
        linhas += linha

        const corpoTabela = $('tbody')
        corpoTabela.innerHTML = linhas
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: ''
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#cep').mask('00000-0000', {
        placeholder: '_____-____'
    })
})