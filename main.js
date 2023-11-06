$(document).ready(function() {
    lista = []
    $('form').on('submit', function(e) {
        e.preventDefault()
        lista.push('<tr>')
        lista.push($(`<td>${$('#nome-completo').val()}</td>`))
        lista.push($(`<td>${$('#email').val()}</td>`))
        lista.push($(`<td>${$('#telefone').val()}</td>`))
        lista.push($(`<td>${$('#cpf').val()}</td>`))
        lista.push($(`<td>${$('#endereço').val()}</td>`))
        lista.push($(`<td>${$('#cep').val()}</td>`))
        lista.push('</tr>')
        
        for(var i = 0; i < lista.length; i++) {
            $(lista[i]).appendTo('tbody')
        }
        $('#nome-completo').val('')
        $('#email').val('')
        $('#telefone').val('')
        $('#cpf').val('')
        $('#endereço').val('')
        $('#cep').val('')
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