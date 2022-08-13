class casing
{
    camelCaseNoDigits() {
        return /^[a-z][a-z]*(([A-Z][a-z]+)*[A-Z]{0,1}|([a-z]+[A-Z])*|[A-Z])$/gm;
    } 

	camelCaseDigits() {
		return /^[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]{0,1}|([a-z0-9]+[A-Z])*|[A-Z])$/gm;
	}

	camelCaseNoDigitsUpto3UpperCaseChars() {
		return /^[a-z][a-z]*(([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{1,3})*|[A-Z]{1,3})$/gm;
	}

	camelCaseDigitsUpto3UpperCaseChars() {
		return /^[a-z][a-z0-9]*(([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{1,3})*|[A-Z]{1,3})$/gm;
	}

    pascalCaseNoDigits() {
        return /^[A-Z](([a-z]+[A-Z]?)*)$/gm;
    }

    pascalCaseDigits() {
        return /^[A-Z](([a-z0-9]+[A-Z]?)*)$/gm;
    }

	pascalCaseNoDigitsUpto3UpperCaseChars() {
		return /^[A-Z](([A-Z]{1,2}[a-z]+)+([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{0,3})*|[A-Z]{1,2})$/gm;
	}

	pascalCaseDigitsUpto3UpperCaseChars() {
		return /^[A-Z](([A-Z]{1,2}[a-z0-9]+)+([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{0,3})*|[A-Z]{1,2})$/gm;
	}
}

module.exports = new casing();