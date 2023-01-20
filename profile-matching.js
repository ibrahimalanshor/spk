const factorPercentage = {
    coreFactor: 60 / 100,
    secondaryFactor: 40 / 100
}
const aspects = [
    {
        name: 'Aspek Kecerdasan',
        percentage: 20 / 100,
        criterias: [
            {
                name: 'Common sense',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Verbalisasi ide',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Sistematika berfikir',
                value: 4,
                secondaryFactor: true
            },
            {
                name: 'Penalaran dan solusi real',
                value: 4,
                secondaryFactor: true
            },
            {
                name: 'Konsentrasi',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Logika praktis',
                value: 4,
                secondaryFactor: true
            },
            {
                name: 'fleksibilitas berfikir',
                value: 4,
                secondaryFactor: true
            },
            {
                name: 'Imajinasi kreatif',
                value: 5,
                coreFactor: true
            },
            {
                name: 'Antisipasi',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Potensi kecerdasan',
                value: 4,
                secondaryFactor: true
            }
        ]
    },
    {
        name: 'Aspek Sikap Kerja',
        percentage: 30 / 100,
        criterias: [
            {
                name: 'Eneri psikis',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Ketelitian dan tanggung jawab',
                value: 4,
                coreFactor: true
            },
            {
                name: 'Kehati-hatian',
                value: 2,
                secondaryFactor: true
            },
            {
                name: 'Pengendalian perasaan',
                value: 3,
                secondaryFactor: true
            },
            {
                name: 'Dorongan berprestasi',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Vitalisasi perencanaan',
                value: 5,
                secondaryFactor: true
            }
        ]
    },
    {
        name: 'Aspek Perilaku',
        percentage: 50 / 100,
        criterias: [
            {
                name: 'Kekuasaan',
                value: 3,
                coreFactor: true
            },
            {
                name: 'Pengaruh',
                value: 4,
                coreFactor: true
            },
            {
                name: 'Keteguhan hati',
                value: 2,
                secondaryFactor: true
            },
            {
                name: 'Pemenuhan',
                value: 3,
                secondaryFactor: true
            }
        ]
    }
]

const alternatives = [
    {
        name: 'Buccu',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 2
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 4
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 2
                    },
                    {
                        name: 'Konsentrasi',
                        value: 3
                    },
                    {
                        name: 'Logika praktis',
                        value: 4
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 3
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 2
                    },
                    {
                        name: 'Antisipasi',
                        value: 3
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 2
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 2
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 4
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 3
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 2
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 3
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 4
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 1
                    },
                    {
                        name: 'Pengaruh',
                        value: 4
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 3
                    },
                    {
                        name: 'Pemenuhan',
                        value: 2
                    }
                ]
            }
        ]
    },
    {
        name: 'Bacco',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 3
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 4
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 3
                    },
                    {
                        name: 'Konsentrasi',
                        value: 4
                    },
                    {
                        name: 'Logika praktis',
                        value: 4
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 2
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 3
                    },
                    {
                        name: 'Antisipasi',
                        value: 3
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 4
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 5
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 4
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 3
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 3
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 4
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 4
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 5
                    },
                    {
                        name: 'Pengaruh',
                        value: 1
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 2
                    },
                    {
                        name: 'Pemenuhan',
                        value: 3
                    }
                ]
            }
        ]
    },
    {
        name: 'Becce',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 4
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 4
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 4
                    },
                    {
                        name: 'Konsentrasi',
                        value: 3
                    },
                    {
                        name: 'Logika praktis',
                        value: 3
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 3
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 2
                    },
                    {
                        name: 'Antisipasi',
                        value: 4
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 2
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 4
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 5
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 3
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 3
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 4
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 4
                    },
                    {
                        name: 'Pengaruh',
                        value: 2
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 1
                    },
                    {
                        name: 'Pemenuhan',
                        value: 3
                    }
                ]
            }
        ]
    },
    {
        name: 'Bicci',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 3
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 3
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 3
                    },
                    {
                        name: 'Konsentrasi',
                        value: 3
                    },
                    {
                        name: 'Logika praktis',
                        value: 2
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 3
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 2
                    },
                    {
                        name: 'Antisipasi',
                        value: 4
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 2
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 3
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 5
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 4
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 3
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 2
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 2
                    },
                    {
                        name: 'Pengaruh',
                        value: 3
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 4
                    },
                    {
                        name: 'Pemenuhan',
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'Bacca',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 3
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 3
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 3
                    },
                    {
                        name: 'Konsentrasi',
                        value: 3
                    },
                    {
                        name: 'Logika praktis',
                        value: 3
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 3
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 3
                    },
                    {
                        name: 'Antisipasi',
                        value: 2
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 2
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 3
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 2
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 4
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 5
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 3
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 3
                    },
                    {
                        name: 'Pengaruh',
                        value: 2
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 1
                    },
                    {
                        name: 'Pemenuhan',
                        value: 5
                    }
                ]
            }
        ]
    },
    {
        name: 'Bocci',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 2
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 3
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 2
                    },
                    {
                        name: 'Konsentrasi',
                        value: 2
                    },
                    {
                        name: 'Logika praktis',
                        value: 3
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 2
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 3
                    },
                    {
                        name: 'Antisipasi',
                        value: 3
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 2
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 4
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 2
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 2
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 5
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 2
                    },
                    {
                        name: 'Pengaruh',
                        value: 1
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 2
                    },
                    {
                        name: 'Pemenuhan',
                        value: 2
                    }
                ]
            }
        ]
    },
    {
        name: 'Macca',
        aspects: [
            {
                name: 'Aspek Kecerdasan',
                criterias: [
                    {
                        name: 'Common sense',
                        value: 1
                    },
                    {
                        name: 'Verbalisasi ide',
                        value: 2
                    },
                    {
                        name: 'Sistematika berfikir',
                        value: 3
                    },
                    {
                        name: 'Penalaran dan solusi real',
                        value: 3
                    },
                    {
                        name: 'Konsentrasi',
                        value: 3
                    },
                    {
                        name: 'Logika praktis',
                        value: 3
                    },
                    {
                        name: 'fleksibilitas berfikir',
                        value: 3
                    },
                    {
                        name: 'Imajinasi kreatif',
                        value: 3
                    },
                    {
                        name: 'Antisipasi',
                        value: 3
                    },
                    {
                        name: 'Potensi kecerdasan',
                        value: 3
                    }
                ]
            },
            {
                name: 'Aspek Sikap Kerja',
                criterias: [
                    {
                        name: 'Eneri psikis',
                        value: 4
                    },
                    {
                        name: 'Ketelitian dan tanggung jawab',
                        value: 2
                    },
                    {
                        name: 'Kehati-hatian',
                        value: 3
                    },
                    {
                        name: 'Pengendalian perasaan',
                        value: 2
                    },
                    {
                        name: 'Dorongan berprestasi',
                        value: 3
                    },
                    {
                        name: 'Vitalisasi perencanaan',
                        value: 5
                    }
                ]
            },
            {
                name: 'Aspek Perilaku',
                criterias: [
                    {
                        name: 'Kekuasaan',
                        value: 1
                    },
                    {
                        name: 'Pengaruh',
                        value: 2
                    },
                    {
                        name: 'Keteguhan hati',
                        value: 3
                    },
                    {
                        name: 'Pemenuhan',
                        value: 2
                    }
                ]
            }
        ]
    }
]

const weights = [
    {
        diff: 0,
        weight: 5.0
    },
    {
        diff: 1,
        weight: 4.5
    },
    {
        diff: -1,
        weight: 4.0
    },
    {
        diff: 2,
        weight: 3.5
    },
    {
        diff: -2,
        weight: 3.0
    },
    {
        diff: 3,
        weight: 2.5
    },
    {
        diff: -3,
        weight: 2.0
    },
    {
        diff: 4,
        weight: 1.5
    },
    {
        diff: -4,
        weight: 1.0
    }
]

const alternativeGapResults = alternatives.map(alternative => {
    const alternativeAspectsWithGap = alternative.aspects.map(alternativeAspect => {
        const aspectTarget = aspects.find(aspect => aspect.name === alternativeAspect.name)
        const criterias = alternativeAspect.criterias.map(alternativeAspectCriteria => {
            const aspectCriteriaTarget = aspectTarget.criterias.find(aspectTargetCriteria => aspectTargetCriteria.name === alternativeAspectCriteria.name)

            return {
                name: alternativeAspectCriteria.name,
                value: alternativeAspectCriteria.value,
                gap: alternativeAspectCriteria.value - aspectCriteriaTarget.value
            }
        })

        return {
            name: alternativeAspect.name,
            criterias
        }
    })

    return {
        name: alternative.name,
        aspects: alternativeAspectsWithGap
    }
})

const alternativeWeightResults = alternativeGapResults.map(alternativeGap => {
    const alternativeGapAspectWithWeight = alternativeGap.aspects.map(alternativeGapAspect => {
        const criterias = alternativeGapAspect.criterias.map(alternativeGapAspectCriteria => {
            return {
                name: alternativeGapAspectCriteria.name,
                value: alternativeGapAspectCriteria.value,
                gap: alternativeGapAspectCriteria.gap,
                weight: weights.find(weight => weight.diff === alternativeGapAspectCriteria.gap).weight
            }
        })

        return {
            name: alternativeGapAspect.name,
            criterias
        }
    })

    return {
        name: alternativeGap.name,
        aspects: alternativeGapAspectWithWeight
    }
})

const alternativeFactorResult = alternativeWeightResults.map(alternativeWeight => {
    const alternativeWeightAspectWithFactor = alternativeWeight.aspects.map(alternativeWeightAspect => {
        const aspectTarget = aspects.find(aspect => aspect.name === alternativeWeightAspect.name)
        const coreFactorCriterias = aspectTarget.criterias.filter(aspectTargetCriteria => aspectTargetCriteria.coreFactor)
        const secondaryFactorCriterias = aspectTarget.criterias.filter(aspectTargetCriteria => aspectTargetCriteria.secondaryFactor)

        const totalCoreFactorValue = coreFactorCriterias.reduce((total, coreFactorCriteria) => {
            const alternativeWeightAspectCriteriaCoreFactor = alternativeWeightAspect.criterias.find(alternativeWeightAspectCriteria => alternativeWeightAspectCriteria.name === coreFactorCriteria.name)

            return total += alternativeWeightAspectCriteriaCoreFactor.weight
        }, 0)
        const coreFactorValue = Number((totalCoreFactorValue / coreFactorCriterias.length).toFixed(2))

        const totalSecondaryFactorValue = secondaryFactorCriterias.reduce((total, secondaryFactorCriteria) => {
            const alternativeWeightAspectCriteriaSecondaryFactor = alternativeWeightAspect.criterias.find(alternativeWeightAspectCriteria => alternativeWeightAspectCriteria.name === secondaryFactorCriteria.name)

            return total += alternativeWeightAspectCriteriaSecondaryFactor.weight
        }, 0)
        const secondaryFactorValue = Number((totalSecondaryFactorValue / secondaryFactorCriterias.length).toFixed(2))

        return {
            name: alternativeWeightAspect.name,
            criterias: alternativeWeightAspect.criterias,
            totalCoreFactorValue,
            totalSecondaryFactorValue,
            totalCoreFactorItem: coreFactorCriterias.length,
            totalSecondaryFactorItem: secondaryFactorCriterias.length,
            coreFactorValue,
            secondaryFactorValue
        }
    })

    return {
        name: alternativeWeight.name,
        aspects: alternativeWeightAspectWithFactor
    }
})

const alternativeAspectValueResult = alternativeFactorResult.map(alternativeFactor => {
    const alternativeFactorAspectWithAspectValue = alternativeFactor.aspects.map(alternativeFactorAspect => {
        return {
            name: alternativeFactorAspect.name,
            criterias: alternativeFactorAspect.criterias,
            totalCoreFactorValue: alternativeFactorAspect.totalCoreFactorValue,
            totalSecondaryFactorValue: alternativeFactorAspect.totalCoreFactorValue,
            totalCoreFactorItem: alternativeFactorAspect.totalCoreFactorItem,
            totalSecondaryFactorItem: alternativeFactorAspect.totalSecondaryFactorItem,
            coreFactorValue: alternativeFactorAspect.coreFactorValue,
            secondaryFactorValue: alternativeFactorAspect.secondaryFactorValue,
            aspectValue: Number(((factorPercentage.coreFactor * alternativeFactorAspect.coreFactorValue) + (factorPercentage.secondaryFactor * alternativeFactorAspect.secondaryFactorValue)).toFixed(2))
        }
    })

    return {
        name: alternativeFactor.name,
        aspects: alternativeFactorAspectWithAspectValue
    }
})

const alternativeLastValue = alternativeAspectValueResult.map(alternativeAspectValue => {
    const lastValue = alternativeAspectValue.aspects.reduce((totalLastValue, alternativeAspectValueAspect) => {
        const aspectLastValue = aspects.find(aspect => aspect.name === alternativeAspectValueAspect.name).percentage * alternativeAspectValueAspect.aspectValue

        return Number((totalLastValue + aspectLastValue).toFixed(2))
    }, 0)
    return {
        name: alternativeAspectValue.name,
        lastValue,
        aspects: alternativeAspectValue.aspects
    }
})

const sortedResults = alternativeLastValue.sort((a, b) => b.lastValue - a.lastValue)
const firstResult = sortedResults[0]

console.log(firstResult)