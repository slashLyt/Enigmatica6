events.listen('item.tags', function (event) {
    var items = [
        'byg:soul_shroom_stem',
        'byg:yellow_glowshroom_stem',
        'byg:red_glowshroom_stem',
        'byg:brown_mushroom_stem',
        'byg:white_mushroom_stem',
        'quark:glowshroom_stem'
    ];
	event.get('forge:mushroom_stems').add(items);
});
