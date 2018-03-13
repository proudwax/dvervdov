block('message').mod('type', 'popup')(
    content()(function () {
        var content = applyNext()[0];

        !Array.isArray(content.mix) && (content.mix = [ content.mix ]);
        var mix = content.mix.concat({ block: 'z-index-group', mods: { level: 2 } });
        content.mix = mix;

        return content;
    })
);
