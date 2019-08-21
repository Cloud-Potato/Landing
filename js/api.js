MinecraftAPI.getServerStatus('cloudpotato.nl', {
    port: 25565
}, function (err, status) {
    
    function renderOnlinePlayers(status) {
        return status.players.now + ' / ' + status.players.max + ' Players';
    }
    document.querySelector('.online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.players').innerHTML = renderOnlinePlayers(status);
    document.querySelector('.motd').innerHTML = status.motd;
    document.querySelector('.icon').src = status.favicon;
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

    document.getElementById('plugins-list').appendChild(renderPluginList(status.plugins));
    document.getElementById('players-list').appendChild(renderAvatarList(status.players.list));

});