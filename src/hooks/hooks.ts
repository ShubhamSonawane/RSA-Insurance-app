import React from "react";

import { StoresContext } from "../store";
import { RootStore } from "../store/RootStore";

// export const useStores = (): React.useContext(storesContext);

export const useStore = <T extends keyof RootStore>(store: T): RootStore[T] => {
    const context = React.useContext(StoresContext);

    if (context === undefined) {
        throw new Error("useStore must be used within the StoresProvider");
    }

    return context[store];
};
