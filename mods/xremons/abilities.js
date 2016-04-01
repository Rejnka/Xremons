exports.BattleAbilities = {
	"superconductor": {
		shortDesc: "This Pokemon can hit Ground types with Electric-type moves.",
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Electric'] = true;}
		},
		id: "superconductor",
		name: "Superconductor",
		rating: 3,
		num: -1	},
		"mohsten": {
		desc: "The power of Steel-type attacks against this Pokemon is halved",
		shortDesc: "The power of Steel-type attacks against this Pokemon is halved.",
		onBasePowerPriority: 7,
		onSourceBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Steel') {
				return this.chainModify(0.5);
			}
		},
		id: "mohs10",
		name: "Moh's 10",
		rating: 2.5,
		num: -2
	},
		"fireabsorb": {
		desc: "This Pokemon is immune to Fire-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fire') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]');
				}
				return null;
			}
		},
		id: "fireabsorb",
		name: "Fire Absorb",
		rating: 3.5,
		num: -3
	},	"fullcharge": {
		shortDesc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
		onUpdate: function (pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.removeVolatile('mustrecharge');
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'mustrecharge') {
				this.add('-immune', pokemon, 'mustrecharge');
				return false;
			}
		},
		id: "fullcharge",
		name: "FullCharge",
		rating: 3,
		num: -4
	},
	};