const getDisplayName = (firstName: string, lastName: string, city: string = '', cv: string = '') => {
    const mayBeCity = city || '?'
    const mayHaveCv = cv === 'cv' ? ' - cv' : ''
    return `[${mayBeCity}] ${firstName} ${lastName}${mayHaveCv}`}

export default getDisplayName