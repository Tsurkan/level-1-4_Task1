function DataTable(config) {
    // тут в принципе то же самое что и на прошлом уровне было
    // только теперь если не приходит параметр data, то нужно проверить,
    // возможно в конфиге есть поле apiUrl
    // и тогда данные нужно брать оттуда

    let url = config.apiUrl;
    fetch(url).then(response => response.json()).then(data => {
    
        let parent = document.querySelector(config1.parent);
        let table = document.createElement('table');

        let head_tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = "№";
        head_tr.appendChild(th);

        for (let i = 0; i < config.columns.length; i++) {
            let th = document.createElement('th');
            th.innerHTML = config.columns[i].title;
            head_tr.appendChild(th);
        }
        table.appendChild(head_tr);

        let num = 1;
        for (let i = 0; i < Object.keys(data.data).length; i++) {
            
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            if (data.data[i] == undefined) {
                continue;
            } else {
                td1.innerHTML = num++;
            }
            tr.appendChild(td1);

            for (let j = 0; j < config.columns.length; j++) {
                let td = document.createElement('td');
                if (data.data[i] == undefined) {
                    continue;
                } else {
                    td.innerHTML = data.data[i][config.columns[j].value]
                }
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
        parent.appendChild(table);
    })
   
}
 
const config1 = {
    parent: '#usersTable',
    columns: [
     {title: 'Имя', value: 'name'},
     {title: 'Фамилия', value: 'surname'},
     {title: 'Аватар', value: 'avatar'},
     {title: 'День рождение', value: 'birthday'},
   ],
   apiUrl: "https://mock-api.shpp.me/mtsurkan/users"
 };
 
 DataTable(config1);
 