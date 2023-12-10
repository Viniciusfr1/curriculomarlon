let cu = [document.getElementById("First"), document.getElementById("Second"), document.getElementById("Third"), document.getElementById("Fourth")]
var information1 = ["Nome: Vinícius Francisco Santos Silva", "Idade: 18", "Local: Recife, Pernambuco", "Email: viniciusfrancisco153@gmail.com"]
var information2 = ["Linguagens de Programação: HTML, CSS, JavaScript, C, C++, Java, Python, DM, C#, MySQL, Git", "Idiomas: Inglês Fluente, Russo Avançado",  "Habilidades: Word, PowerPoint, Excel, Unity Engine, Unreal Engine, DreamMaker, Visual Studio Code, Visual Studio, Cheat Engine, IDA", ""]
var information3 = ["Formação Acadêmica: Ensino Médio Completo, Cursando Faculdade de Análise e Desenvolvilmento de Sistemas", "", "", ""]
var information4 = ["Github: Comicao1", "Email: viniciusfrancisco153@gmail.com", "Local: Recife, Pernambuco", ""]

var image1 = ["https://cdn.discordapp.com/attachments/1050781438406037534/1175229653821169814/image.png?ex=65862868&is=6573b368&hm=a2c00cabf0104ac05c0fbdfefdc898bd71ea2727289947993523ba81f23a1f44&", 
"https://cdn.discordapp.com/attachments/1050781438406037534/1161822395498242078/image.png?ex=6583866c&is=6571116c&hm=0450ccfe59a6d9df09778a541c2d95de4eb9005f26a84eadb39865a461a577e4&",
"https://cdn.discordapp.com/attachments/1050781438406037534/1161110728024002560/image.png?ex=6580efa1&is=656e7aa1&hm=c47bad82967a8c39b330b55c32b33f8542e7cd21075610379f5b75ea55d693fa&",
"https://cdn.discordapp.com/attachments/1050781438406037534/1161103579474567209/image.png?ex=6580e8f9&is=656e73f9&hm=55ad8ff1cd567aeb11aab5a82429dfc98baece8dc01b0d5b69cf76848b2d68ed&"
]

var image2 = ["https://cdn.discordapp.com/attachments/745754917779538040/931647977959854110/unknown.png?ex=6585f34b&is=65737e4b&hm=7e4523cbeb66c40152e8be3abc91a340d72f35f5c93500540399383397392373&", 
"https://cdn.discordapp.com/attachments/745754917779538040/931648031856672798/unknown.png?ex=6585f357&is=65737e57&hm=ede4ca6009a4c1472a0712db3a0f896b44c976c7d8eb3f06f36409fa9a6c8191&",
"https://cdn.discordapp.com/attachments/745754917779538040/900899195911811153/unknown.png?ex=6584d442&is=65725f42&hm=ed3e2432cc26af15981dff716c073f83116652a587e51f3becb2e3c30956d84c&",
"https://cdn.discordapp.com/attachments/745754917779538040/891460373033672804/unknown.png?ex=658767ab&is=6574f2ab&hm=a9be6df1fa8b82f97c0a154bd40ca9ee1c9ffd9af5f36acd661350254f5fed11&"
]

var image3 = ["https://cdn.discordapp.com/attachments/706611098828144825/1183221160461205514/image.png?ex=65878b93&is=65751693&hm=97170443c9122bb0eb949800266fdc3e8da4a5c28ed16479691c4def44ad85f1&", 
"https://cdn.discordapp.com/attachments/706611098828144825/1183221254573002772/image.png?ex=65878baa&is=657516aa&hm=f30eb4ace267f54be02a8fd6304e5123eb4b3bfb4852793b65b08709c84a44f6&",
"https://cdn.discordapp.com/attachments/706611098828144825/1183221400408948796/image.png?ex=65878bcd&is=657516cd&hm=ff664fd25bc12f9d5f70498b455f69a097e09cffed2d9855b0ecbd1f599dbd60&",
""
]

var image4 = ["https://cdn.discordapp.com/attachments/706611098828144825/1183221828005675068/image.png?ex=65878c32&is=65751732&hm=18e36a70b18325d5d862d1d0511d133777799e76e04ac6ba2e966238e18ebebc&", 
"https://cdn.discordapp.com/attachments/706611098828144825/1183221885811560518/image.png?ex=65878c40&is=65751740&hm=4f4cddb6f6889f6d8bfd04904c08943f32861c98e16f032a4219d0751a88af88&",
"",
""
]

function someFunction(ugabuga=0){ //podia ser melhor eu sei
    console.log(ugabuga)
    for(var i = 0; i<cu.length; i++){
        cu[i].innerHTML = "";
        if(ugabuga==1)
            cu[i].innerHTML = information1[i];
        if(ugabuga==2)
            cu[i].innerHTML = information2[i];
        if(ugabuga==3)
            cu[i].innerHTML = information3[i];
        if(ugabuga==4)
            cu[i].innerHTML = information4[i];
        }
}

function someFunction2(ugabuga=0){ //podia ser melhor eu sei
    console.log(ugabuga)
    for(var i = 0; i<cu.length; i++){
        cu[i].innerHTML = "";
        if(ugabuga==1)
            cu[i].src = image1[i];
        if(ugabuga==2)
            cu[i].src = image2[i];
        if(ugabuga==3)
            cu[i].src = image3[i];
        if(ugabuga==4)
            cu[i].src = image4[i];
        }
}

function enviar(){
    let comentario = document.getElementById("comentarioaq")
    let texto = document.getElementById("textokk")
    let textu = texto.value;
    let cu = comentario.innerHTML;
    if(!textu)return;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    comentario.innerHTML = `${textu} - Anônimo - às - ${formattedToday}<br>`
    comentario.innerHTML += cu;
}

function myFunction(){
    document.getElementById("WOLLHTIHRDENTOTALENKRIEG").muted = 0;
}
