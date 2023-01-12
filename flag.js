'use-strict'

const flagArr = [
    {name: 'United Arab Emirates',
    flag: 'AE'
    },
    {name: 'Andorra',
    flag: 'AD'
    },
    {name: 'Afghanistan',
    flag: 'AF'
    },
    {name: 'Antigua And Barbuda',
    flag: 'AG'
    },
    {name: 'Anguilla',
    flag: 'AI'
    },
    {name: 'Albania',
    flag: 'AL'
    },
    {name: 'Armenia',
    flag: 'AM'
    },
    {name: 'Angola',
    flag: 'AO'
    },
    {name: 'Antarctica',
    flag: 'AQ'
    },
    {name: 'Argentina',
    flag: 'AR'
    },
    {name: 'American Samoa',
    flag: 'AS'
    },
    {name: 'Austria',
    flag: 'AT'
    },
    {name: 'Australia',
    flag: 'AU'
    },
    {name: 'Aruba',
    flag: 'AW'
    },
    {name: 'åland Islands',
    flag: 'AX'
    },
    {name: 'Azerbaijan',
    flag: 'AZ'
    },
    {name: 'Bosnia And Herzegovina',
    flag: 'BA'
    },
    {name: 'Barbados',
    flag: 'BB'
    },
    {name: 'Bangladesh',
    flag: 'BD'
    },
    {name: 'Belgium',
    flag: 'BE'
    },
    {name: 'Burkina Faso',
    flag: 'BF'
    },
    {name: 'Bulgaria',
    flag: 'BG'
    },
    {name: 'Bahrain',
    flag: 'BH'
    },
    {name: 'Burundi',
    flag: 'BI'
    },
    {name: 'Benin',
    flag: 'BJ'
    },
    {name: 'Saint Barthélemy',
    flag: 'BL'
    },
    {name: 'Bermuda',
    flag: 'BM'
    },
    {name: 'Brunei Darussalam',
    flag: 'BN'
    },
    {name: 'Bolivia',
    flag: 'BO'
    },
    {name: 'Bonaire',
    flag: 'BQ'
    },
    {name: 'Brazil',
    flag: 'BR'
    },
    {name: 'The Bahamas',
    flag: 'BS'
    },
    {name: 'Bhutan',
    flag: 'BT'
    },
    {name: 'Bouvet Island',
    flag: 'BV'
    },
    {name: 'Botswana',
    flag: 'BW'
    },
    {name: 'Belarus',
    flag: 'BY'
    },
    {name: 'Belize',
    flag: 'BZ'
    },
    {name: 'Canada',
    flag: 'CA'
    },
    {name: 'The Cocos Islands',
    flag: 'CC'
    },
    {name: 'Democratic Republic Of Congo',
    flag: 'CD'
    },
    {name: 'The Central African Republic',
    flag: 'CF'
    },
    {name: 'Congo',
    flag: 'CG'
    },
    {name: 'Switzerland',
    flag: 'CH'
    },
    {name: 'Côte D\'ivoire',
    flag: 'CI'
    },
    {name: 'The Cook Islands',
    flag: 'CK'
    },
    {name: 'Chile',
    flag: 'CL'
    },
    {name: 'Cameroon',
    flag: 'CM'
    },
    {name: 'China',
    flag: 'CN'
    },
    {name: 'Colombia',
    flag: 'CO'
    },
    {name: 'Costa Rica',
    flag: 'CR'
    },
    {name: 'Cuba',
    flag: 'CU'
    },
    {name: 'Cabo Verde',
    flag: 'CV'
    },
    {name: 'Curaçao',
    flag: 'CW'
    },
    {name: 'Christmas Island',
    flag: 'CX'
    },
    {name: 'Cyprus',
    flag: 'CY'
    },
    {name: 'Czechia',
    flag: 'CZ'
    },
    {name: 'Germany',
    flag: 'DE'
    },
    {name: 'Djibouti',
    flag: 'DJ'
    },
    {name: 'Denmark',
    flag: 'DK'
    },
    {name: 'Dominica',
    flag: 'DM'
    },
    {name: 'Dominican Republic',
    flag: 'DO'
    },
    {name: 'Algeria',
    flag: 'DZ'
    },
    {name: 'Ecuador',
    flag: 'EC'
    },
    {name: 'Estonia',
    flag: 'EE'
    },
    {name: 'Egypt',
    flag: 'EG'
    },
    {name: 'Western Sahara',
    flag: 'EH'
    },
    {name: 'Eritrea',
    flag: 'ER'
    },
    {name: 'Spain',
    flag: 'ES'
    },
    {name: 'Ethiopia',
    flag: 'ET'
    },
    {name: 'European Union',
    flag: 'EU'
    },
    {name: 'Finland',
    flag: 'FI'
    },
    {name: 'Fiji',
    flag: 'FJ'
    },
    {name: 'The Falkland Islands',
    flag: 'FK'
    },
    {name: 'The Federated States Of Micronesia',
    flag: 'FM'
    },
    {name: 'The Faroe Islands',
    flag: 'FO'
    },
    {name: 'France',
    flag: 'FR'
    },
    {name: 'Gabon',
    flag: 'GA'
    },
    {name: 'England',
    flag: 'GB-ENG'
    },
    {name: 'Northern Ireland',
    flag: 'GB-NIR'
    },
    {name: 'Scotland',
    flag: 'GB-SCT'
    },
    {name: 'Wales',
    flag: 'GB-WLS'
    },
    {name: 'The United Kingdom Of Great Britain And Northern Ireland',
    flag: 'GB'
    },
    {name: 'Grenada',
    flag: 'GD'
    },
    {name: 'Georgia',
    flag: 'GE'
    },
    {name: 'French Guiana',
    flag: 'GF'
    },
    {name: 'Guernsey',
    flag: 'GG'
    },
    {name: 'Ghana',
    flag: 'GH'
    },
    {name: 'Gibraltar',
    flag: 'GI'
    },
    {name: 'Greenland',
    flag: 'GL'
    },
    {name: 'Gambia',
    flag: 'GM'
    },
    {name: 'Guinea',
    flag: 'GN'
    },
    {name: 'Guadeloupe',
    flag: 'GP'
    },
    {name: '',
    flag: ''
    },
    {name: '',
    flag: ''
    },
    {name: '',
    flag: ''
    },
    {name: '',
    flag: ''
    },
   
]