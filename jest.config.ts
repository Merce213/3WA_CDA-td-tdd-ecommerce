import type { Config } from "jest";
import { createDefaultPreset } from "ts-jest";

const config: Config = {
	verbose: true,
	preset: "ts-jest",
	...createDefaultPreset(),
};

export default config;
