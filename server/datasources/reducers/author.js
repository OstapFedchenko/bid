const authorReducer = author => {

  return {
    id: author.id,
    firstName: author.firstName,
    lastName: author.lastName,
    middleName: author.middleName,
    company: author.company,
    position: author.position,
    photoBase64: author.photoBase64,
    photoFormat: author.photoFormat,
    email: author.email,
    infoHtml: author.infoHtml
  }
};

module.exports = authorReducer;
