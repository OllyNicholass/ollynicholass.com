
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "'Rubik', sans-serif",
		"--theme-font-family-heading": "'Rubik', sans-serif",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #25aff4 
		"--color-primary-50": "222 243 253", // #def3fd
		"--color-primary-100": "211 239 253", // #d3effd
		"--color-primary-200": "201 235 252", // #c9ebfc
		"--color-primary-300": "168 223 251", // #a8dffb
		"--color-primary-400": "102 199 247", // #66c7f7
		"--color-primary-500": "37 175 244", // #25aff4
		"--color-primary-600": "33 158 220", // #219edc
		"--color-primary-700": "28 131 183", // #1c83b7
		"--color-primary-800": "22 105 146", // #166992
		"--color-primary-900": "18 86 120", // #125678
		// secondary | #a62ea8 
		"--color-secondary-50": "242 224 242", // #f2e0f2
		"--color-secondary-100": "237 213 238", // #edd5ee
		"--color-secondary-200": "233 203 233", // #e9cbe9
		"--color-secondary-300": "219 171 220", // #dbabdc
		"--color-secondary-400": "193 109 194", // #c16dc2
		"--color-secondary-500": "166 46 168", // #a62ea8
		"--color-secondary-600": "149 41 151", // #952997
		"--color-secondary-700": "125 35 126", // #7d237e
		"--color-secondary-800": "100 28 101", // #641c65
		"--color-secondary-900": "81 23 82", // #511752
		// tertiary | #ade70d 
		"--color-tertiary-50": "243 251 219", // #f3fbdb
		"--color-tertiary-100": "239 250 207", // #effacf
		"--color-tertiary-200": "235 249 195", // #ebf9c3
		"--color-tertiary-300": "222 245 158", // #def59e
		"--color-tertiary-400": "198 238 86", // #c6ee56
		"--color-tertiary-500": "173 231 13", // #ade70d
		"--color-tertiary-600": "156 208 12", // #9cd00c
		"--color-tertiary-700": "130 173 10", // #82ad0a
		"--color-tertiary-800": "104 139 8", // #688b08
		"--color-tertiary-900": "85 113 6", // #557106
		// success | #41bd28 
		"--color-success-50": "227 245 223", // #e3f5df
		"--color-success-100": "217 242 212", // #d9f2d4
		"--color-success-200": "208 239 201", // #d0efc9
		"--color-success-300": "179 229 169", // #b3e5a9
		"--color-success-400": "122 209 105", // #7ad169
		"--color-success-500": "65 189 40", // #41bd28
		"--color-success-600": "59 170 36", // #3baa24
		"--color-success-700": "49 142 30", // #318e1e
		"--color-success-800": "39 113 24", // #277118
		"--color-success-900": "32 93 20", // #205d14
		// warning | #c07826 
		"--color-warning-50": "246 235 222", // #f6ebde
		"--color-warning-100": "242 228 212", // #f2e4d4
		"--color-warning-200": "239 221 201", // #efddc9
		"--color-warning-300": "230 201 168", // #e6c9a8
		"--color-warning-400": "211 161 103", // #d3a167
		"--color-warning-500": "192 120 38", // #c07826
		"--color-warning-600": "173 108 34", // #ad6c22
		"--color-warning-700": "144 90 29", // #905a1d
		"--color-warning-800": "115 72 23", // #734817
		"--color-warning-900": "94 59 19", // #5e3b13
		// error | #a22f3b 
		"--color-error-50": "241 224 226", // #f1e0e2
		"--color-error-100": "236 213 216", // #ecd5d8
		"--color-error-200": "232 203 206", // #e8cbce
		"--color-error-300": "218 172 177", // #daacb1
		"--color-error-400": "190 109 118", // #be6d76
		"--color-error-500": "162 47 59", // #a22f3b
		"--color-error-600": "146 42 53", // #922a35
		"--color-error-700": "122 35 44", // #7a232c
		"--color-error-800": "97 28 35", // #611c23
		"--color-error-900": "79 23 29", // #4f171d
		// surface | #2f3f6f 
		"--color-surface-50": "224 226 233", // #e0e2e9
		"--color-surface-100": "213 217 226", // #d5d9e2
		"--color-surface-200": "203 207 219", // #cbcfdb
		"--color-surface-300": "172 178 197", // #acb2c5
		"--color-surface-400": "109 121 154", // #6d799a
		"--color-surface-500": "47 63 111", // #2f3f6f
		"--color-surface-600": "42 57 100", // #2a3964
		"--color-surface-700": "35 47 83", // #232f53
		"--color-surface-800": "28 38 67", // #1c2643
		"--color-surface-900": "23 31 54", // #171f36
		
	}
}