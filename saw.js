const criterias = [
	{
		name: 'C1',
		weight: 35 / 100,
		type: 'max'
	},
	{
		name: 'C2',
		weight: 25 / 100,
		type: 'max'
	},
	{
		name: 'C3',
		weight: 25 / 100,
		type: 'max'
	},
	{
		name: 'C4',
		weight: 15 / 100,
		type: 'max'
	}
]
const alternatives = [
	{
		name: 'Indra',
		criterias: [
			{
				name: 'C1',
				total: 70,
			},
			{
				name: 'C2',
				total: 50,
			},
			{
				name: 'C3',
				total: 80,
			},
			{
				name: 'C4',
				total: 60,
			}
		]
	},
	{
		name: 'Roni',
		criterias: [
			{
				name: 'C1',
				total: 50,
			},
			{
				name: 'C2',
				total: 60,
			},
			{
				name: 'C3',
				total: 82,
			},
			{
				name: 'C4',
				total: 70,
			}
		]
	},
	{
		name: 'Putri',
		criterias: [
			{
				name: 'C1',
				total: 85,
			},
			{
				name: 'C2',
				total: 55,
			},
			{
				name: 'C3',
				total: 80,
			},
			{
				name: 'C4',
				total: 75,
			}
		]
	},
	{
		name: 'Dani',
		criterias: [
			{
				name: 'C1',
				total: 82,
			},
			{
				name: 'C2',
				total: 70,
			},
			{
				name: 'C3',
				total: 65,
			},
			{
				name: 'C4',
				total: 85,
			}
		]
	},
	{
		name: 'Ratna',
		criterias: [
			{
				name: 'C1',
				total: 75,
			},
			{
				name: 'C2',
				total: 75,
			},
			{
				name: 'C3',
				total: 85,
			},
			{
				name: 'C4',
				total: 74,
			}
		]
	},
	{
		name: 'Mira',
		criterias: [
			{
				name: 'C1',
				total: 62,
			},
			{
				name: 'C2',
				total: 50,
			},
			{
				name: 'C3',
				total: 75,
			},
			{
				name: 'C4',
				total: 80,
			}
		]
	}
]

const minMaxCriterias = criterias.reduce((criteriaRes, criteria) => {
	criteriaRes[criteria.name] = {
		type: criteria.type,
		total: Math.max(...alternatives.map(alternative => alternative.criterias)
			.map(alternativeCriterias => {
				return alternativeCriterias.find(alternativeCriteria => alternativeCriteria.name === criteria.name)
			})
			.map(alternativeCriterias => alternativeCriterias.total))
	}

	return criteriaRes
}, {})

const alternativeRatings = alternatives.reduce((ratingRes, alternative) => {
	ratingRes[alternative.name] = alternative.criterias.reduce((criteriaRes, criteria) => {
		criteriaRes[criteria.name] = {
			total: criteria.total,
			rating: Number(parseFloat(criteria.total / minMaxCriterias[criteria.name].total).toFixed(2))
		}

		return criteriaRes
	}, {})

	return ratingRes
}, {})

const lastValues = Object.entries(alternativeRatings).reduce((lastValueRes, [alternative, alternativeCriterias]) => {
	const criteriasWithLastValue = Object.entries(alternativeCriterias).reduce((criteriaRes, [alternativeCriteriaName, { total, rating }]) => {
		criteriaRes[alternativeCriteriaName] = {
			lastValue: criterias.find(criteria => criteria.name === alternativeCriteriaName).weight * rating,
			total,
			rating
		}

		return criteriaRes
	}, {})
	const total = Object.entries(criteriasWithLastValue)
		.map(([criteriaName, { lastValue }]) => lastValue)
		.reduce((totalLastValue, lastValue) => totalLastValue += lastValue)

	lastValueRes[alternative] = {
		criterias: criteriasWithLastValue,
		total: Number(parseFloat(total).toFixed(3))
	}

	return lastValueRes
}, {})

const results = Object.entries(lastValues).map(([alternative, { criterias, total }]) => ({
	name: alternative,
	criterias,
	lastValue: total
}))


const sortedResults = results.sort((a, b) => b.lastValue - a.lastValue)

const firstResult = sortedResults[0]

console.log(firstResult)