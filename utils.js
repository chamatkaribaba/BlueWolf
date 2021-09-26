const clientId = "874326605072334898";
const whitelistedUsers = [this.clientId, "713083932723249244"];

function capitalize(str) {
  if (!str) return "";
  else
    return `${str.slice(0, 1).toUpperCase()}${str
      .slice(1, str.length)
      .toLowerCase()}`;
}

module.exports.clientId = clientId;
module.exports.whitelist = whitelistedUsers;
module.exports.capitalize = capitalize;