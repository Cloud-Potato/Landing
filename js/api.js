MinecraftAPI.getServerStatus('cloudpotato.nl', {
    port: 25565
}, function (err, status) {
    document.querySelector('.server-online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.server-players').innerHTML = status.players.now;
    document.querySelector('.server-maxplayers').innerHTML = status.players.max;
    document.querySelector('.server-motd').innerHTML = status.motd;
    document.querySelector('.server-icon').src = status.favicon;
});

MinecraftAPI.getServerQuery('cloudpotato.nl', {
    port: 25565
}, function (err, status) {

    function renderAvatarList(array) {
        var list = document.createElement('ul');
        list.className = 'avatar-list'
        for (var i = 0; i < array.length; i++) {
            var item = document.createElement('li');
            var image = document.createElement('img');
            image.src = 'https://minotar.net/avatar/' + array[i];
            image.className = 'avatar';
            item.appendChild(image);
            item.appendChild(document.createTextNode(array[i]));
            list.appendChild(item);
        }
        return list;
    };

    function renderPluginList(array) {
        var list = document.createElement('ul');
        for (var i = 0; i < array.length; i++) {
            var item = document.createElement('li');
            item.appendChild(document.createTextNode(array[i]));
            list.appendChild(item);
        }
        return list;
    };

    document.getElementById('plugins').appendChild(renderPluginList(status.plugins));
    document.getElementById('players-avatars').appendChild(renderAvatarList(status.players.list));

});