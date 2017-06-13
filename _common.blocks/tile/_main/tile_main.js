modules.define('tile', ['i-bem-dom'], function(provide, bemDom, Tile) {

provide(Tile.declMod({ modName: 'main', modVal: true }, {
    onSetMod: {
        'js': {
            'inited': function() {
                // console.log(this);
            }
        }
    }
}));

});
