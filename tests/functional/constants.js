module.exports.LOGIN = 'XXXXX';
module.exports.PASSWD = 'XXXXXXXXX';

let i = 106;
module.exports.internalName = i + 'internal_Acceptance test page';
module.exports.publicName = i + 'public_Acceptance test page';
module.exports.description = i + 'decription_Acceptance test page';

let parentPageTextOfName = 'home';
module.exports.parentPageTextOfName = parentPageTextOfName;

let internalPublicName = i + 'public_Acceptance test page';

module.exports.expectedNameOfPage = '(' + parentPageTextOfName + '\\' + internalPublicName + ')';
module.exports.expectedLinkText = '(' + internalPublicName.substr(0, 13) + '...)';
module.exports.pathToAPI = '/webservices/acceptanceTests/index.php?acceptance=';