const countrydata = JSON.parse(`[{ "Code": "AD", "Country": "Andorra", "Nationality": "Andorian" }, { "Code": "AE", "Country": "United Arab Emirates", "Nationality": "Emirian" }, { "Code": "AF", "Country": "Afghanistan", "Nationality": "Afghani" }, { "Code": "AI", "Country": "Anguilla", "Nationality": "Anguillan" }, { "Code": "AM", "Country": "Armenia", "Nationality": "Armenian" }, { "Code": "AO", "Country": "Angola", "Nationality": "Angolian" }, { "Code": "AQ", "Country": "Antarctica", "Nationality": "Antarctic" }, { "Code": "AR", "Country": "Argentina", "Nationality": "Argentine" }, { "Code": "AS", "Country": "Austria", "Nationality": "Austrian" }, { "Code": "AU", "Country": "Australia", "Nationality": "Australian" }, { "Code": "AW", "Country": "Aruba", "Nationality": "Arubian" }, { "Code": "BA", "Country": "Bangladesh", "Nationality": "Bangladeshi" }, { "Code": "BB", "Country": "Barbados", "Nationality": "Barbadian" }, { "Code": "BE", "Country": "Belgium", "Nationality": "Belgian" }, { "Code": "BH", "Country": "Bahrain", "Nationality": "Bahrainian" }, { "Code": "BM", "Country": "Bermuda", "Nationality": "Bermuda" }, { "Code": "BO", "Country": "Bolivia", "Nationality": "Bolivian" }, { "Code": "BR", "Country": "Brazil", "Nationality": "Brazilian" }, { "Code": "BS", "Country": "Bahamas", "Nationality": "Bahameese" }, { "Code": "BT", "Country": "Bhutan", "Nationality": "Bhutanese" }, { "Code": "BU", "Country": "Bulgaria", "Nationality": "Bulgarian" }, { "Code": "BY", "Country": "Belarus", "Nationality": "Belarusian" }, { "Code": "BZ", "Country": "Belize", "Nationality": "Belizean" }, { "Code": "CA", "Country": "Canada", "Nationality": "Canadian" }, { "Code": "CG", "Country": "Congo", "Nationality": "Congolese" }, { "Code": "CH", "Country": "China", "Nationality": "Chinese" }, { "Code": "CH", "Country": "Switzerland", "Nationality": "Swiss" }, { "Code": "CL", "Country": "Chile", "Nationality": "Chilean" }, { "Code": "CM", "Country": "Cambodia", "Nationality": "Cambodian" }, { "Code": "CM", "Country": "Cameroon", "Nationality": "Cameroonian" }, { "Code": "CO", "Country": "Columbia", "Nationality": "Columbian" }, { "Code": "CR", "Country": "Czech Republic", "Nationality": "Czech" }, { "Code": "CR", "Country": "Costa Rica", "Nationality": "Costa Rican" }, { "Code": "CU", "Country": "Cuba", "Nationality": "Cuban" }, { "Code": "CY", "Country": "Cyprus", "Nationality": "Cypriot" }, { "Code": "DE", "Country": "Germany", "Nationality": "German" }, { "Code": "DK", "Country": "Denmark", "Nationality": "Danish" }, { "Code": "DM", "Country": "Dominica", "Nationality": "Dominican" }, { "Code": "EC", "Country": "Ecuador", "Nationality": "Ecuadorean" }, { "Code": "EE", "Country": "Estonia", "Nationality": "Estonian" }, { "Code": "EG", "Country": "Egypt", "Nationality": "Egyptian" }, { "Code": "ET", "Country": "Ethiopia", "Nationality": "Ethiopian" }, { "Code": "FI", "Country": "Finland", "Nationality": "Finnish" }, { "Code": "FJ", "Country": "Fiji", "Nationality": "Fijian" }, { "Code": "FR", "Country": "France", "Nationality": "French" }, { "Code": "GB", "Country": "United Kingdom", "Nationality": "British" }, { "Code": "GE", "Country": "Georgia", "Nationality": "Georgian" }, { "Code": "GH", "Country": "Ghana", "Nationality": "Ghanaian" }, { "Code": "GN", "Country": "Guinea", "Nationality": "Guinean" }, { "Code": "GR", "Country": "Greece", "Nationality": "Greek" }, { "Code": "GY", "Country": "Guyana", "Nationality": "Guyanese" }, { "Code": "HK", "Country": "Hong Kong", "Nationality": "Chinese" }, { "Code": "HR", "Country": "Croatia", "Nationality": "Croatian" }, { "Code": "HU", "Country": "Hungary", "Nationality": "Hungarian" }, { "Code": "ID", "Country": "Indonesia", "Nationality": "Indonesian" }, { "Code": "IE", "Country": "Ireland", "Nationality": "Irish" }, { "Code": "IN", "Country": "India", "Nationality": "Indian" }, { "Code": "IQ", "Country": "Iraq", "Nationality": "Iraqi" }, { "Code": "IR", "Country": "Iran", "Nationality": "Iranian" }, { "Code": "IS", "Country": "Israel", "Nationality": "Israeli" }, { "Code": "IS", "Country": "Iceland", "Nationality": "Icelander" }, { "Code": "IT", "Country": "Italy", "Nationality": "Italian" }, { "Code": "JM", "Country": "Jamaica", "Nationality": "Jamaican" }, { "Code": "JO", "Country": "Jordan", "Nationality": "Jordanian" }, { "Code": "JP", "Country": "Japan", "Nationality": "Japanese" }, { "Code": "KE", "Country": "Kenya", "Nationality": "Kenyan" }, { "Code": "KO", "Country": "Korea", "Nationality": "Korean" }, { "Code": "KW", "Country": "Kuwait", "Nationality": "Kuwaiti" }, { "Code": "KZ", "Country": "Kazakhstan", "Nationality": "Kazakhstani" }, { "Code": "KZ", "Country": "Kazakhstan", "Nationality": "Kazakhstani" }, { "Code": "LB", "Country": "Lebanon", "Nationality": "Lebanese" }, { "Code": "LK", "Country": "Sri Lanka", "Nationality": "Sri Lankan" }, { "Code": "LT", "Country": "Lithuania", "Nationality": "Lithuanian" }, { "Code": "LU", "Country": "Luxembourg", "Nationality": "Luxembourger" }, { "Code": "MA", "Country": "Morocco", "Nationality": "Moroccan" }, { "Code": "MC", "Country": "Monaco", "Nationality": "Monacan" }, { "Code": "ME", "Country": "Mexico", "Nationality": "Mexican" }, { "Code": "MM", "Country": "Myanmar", "Nationality": "Mayanmarese" }, { "Code": "MN", "Country": "Mongolia", "Nationality": "Mongolian" }, { "Code": "MO", "Country": "Macau", "Nationality": "Macau" }, { "Code": "MU", "Country": "Mauritius", "Nationality": "Mauritian" }, { "Code": "MV", "Country": "Maldives", "Nationality": "Maldivan" }, { "Code": "MY", "Country": "Malaysia", "Nationality": "Malaysian" }, { "Code": "NA", "Country": "Namibia", "Nationality": "Namibian" }, { "Code": "NG", "Country": "Nigeria", "Nationality": "Nigerian" }, { "Code": "NL", "Country": "Netherland", "Nationality": "Dutch" }, { "Code": "NO", "Country": "Norway", "Nationality": "Norwegian" }, { "Code": "NP", "Country": "Nepal", "Nationality": "Nepalese" }, { "Code": "NZ", "Country": "New Zealand", "Nationality": "New Zealander" }, { "Code": "OM", "Country": "Oman", "Nationality": "Omani" }, { "Code": "PA", "Country": "Panama", "Nationality": "Panamanian" }, { "Code": "PE", "Country": "Peru", "Nationality": "Peruvian" }, { "Code": "PH", "Country": "Philippines", "Nationality": "Filipino" }, { "Code": "PK", "Country": "Pakistan", "Nationality": "Pakistani" }, { "Code": "PO", "Country": "Poland", "Nationality": "Polish" }, { "Code": "PT", "Country": "Portugal", "Nationality": "Portugees" }, { "Code": "PY", "Country": "Paraguay", "Nationality": "Paraguayan" }, { "Code": "QA", "Country": "Qatar", "Nationality": "Qatari" }, { "Code": "RO", "Country": "Romania", "Nationality": "Romanian" }, { "Code": "RU", "Country": "Russia", "Nationality": "Russian" }, { "Code": "SA", "Country": "Saudi Arabia", "Nationality": "Saudi Arabian" }, { "Code": "SC", "Country": "Seychelles", "Nationality": "Seychellois" }, { "Code": "SE", "Country": "Sweden", "Nationality": "Swedish" }, { "Code": "SG", "Country": "Singapore", "Nationality": "Singaporean" }, { "Code": "SK", "Country": "Slovakia", "Nationality": "Slovakian" }, { "Code": "SN", "Country": "Senegal", "Nationality": "Senegalese" }, { "Code": "SO", "Country": "Somalia", "Nationality": "Somali" }, { "Code": "SP", "Country": "Spain", "Nationality": "Spanish" }, { "Code": "TH", "Country": "Thailand", "Nationality": "Thai" }, { "Code": "TN", "Country": "Tunisia", "Nationality": "Tunisian" }, { "Code": "TR", "Country": "Turkey", "Nationality": "Turkish" }, { "Code": "TW", "Country": "Taiwan", "Nationality": "Taiwanese" }, { "Code": "TZ", "Country": "Tanzania", "Nationality": "Tanzanian" }, { "Code": "UA", "Country": "Ukraine", "Nationality": "Ukrainian" }, { "Code": "UG", "Country": "Uganda", "Nationality": "Ugandan" }, { "Code": "US", "Country": "United States of America", "Nationality": "American" }, { "Code": "UY", "Country": "Uruguay", "Nationality": "Uruguayan" }, { "Code": "UZ", "Country": "Uzbekistan", "Nationality": "Uzbekistani" }, { "Code": "VE", "Country": "Venezuela", "Nationality": "Venezuelan" }, { "Code": "VN", "Country": "Vietnam", "Nationality": "Vietnamese" }, { "Code": "YE", "Country": "Yemen", "Nationality": "Yemeni" }, { "Code": "ZA", "Country": "South Africa", "Nationality": "South African" }, { "Code": "ZM", "Country": "Zambia", "Nationality": "Zambian" }, { "Code": "ZW", "Country": "Zimbabwe", "Nationality": "Zimbabwean" }]`)


addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event.request).catch(
            (err) => new Response(err.stack, { status: 500 })
        )
    );
});

async function handleRequest(request) {
    var country = request.headers.get("CF-IPCountry")

    return new Response((countrydata.find(c => c.Code === country))?.Nationality || "", {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
            "Access-Control-Max-Age": "86400",
            "Content-Type": "text/plain",
            "Cache-Control": "no-cache, no-store, must-revalidate",
        }
    })
}