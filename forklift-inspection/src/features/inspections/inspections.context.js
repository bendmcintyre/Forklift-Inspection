import {
  createContext,
  useContext,
  useReducer,
  React,
} from 'react';

export const InspectionsContext = createContext([]);
export const InspectionsDispatchContext = createContext(null);

export function useInspections() {
  return useContext(InspectionsContext);
}

export function useInspectionsDispatch() {
  return useContext(InspectionsDispatchContext);
}

const initialInspections = [];

function inspectionsReducer(inspections, action) {
  switch (action.type) {
    case 'FETCH_INSPECTIONS_SUCCESS':
      return [
        ...action.inspections,
      ];
    default: {
      console.log(inspections, action);
    }
  }

  return undefined;
}

export function InspectionsProvider({ children }) {
  const [inspections, dispatch] = useReducer(
    inspectionsReducer,
    initialInspections,
  );

  return (
    <InspectionsContext.Provider value={inspections}>
      <InspectionsDispatchContext.Provider value={dispatch}>
        {children}
      </InspectionsDispatchContext.Provider>
    </InspectionsContext.Provider>
  );
}
