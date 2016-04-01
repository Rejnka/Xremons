exports.BattleFormats = {
	if (set.moves && set.moves.length > 4) {
				problems.push((set.name || set.species) + ' has more than four moves.');
			}

					{// no moar ivs worked different (DVs, 0 to 15, 2 points each) so we put all IVs to 30
			set.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
						// They also get a useless nature, since that doesn't exist
			set.nature = 'Serious';

			// No shinies
			set.shiny = false;

			return problems;
		}
	},
	standard: {
		effectType: 'Banlist',
		ruleset: ['Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Ubers']