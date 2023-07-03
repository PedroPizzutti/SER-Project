export interface IDefaultColumnsProps {
  actions: any;
}

export interface IExtractorObject {
  [key: string]: any;
}

export interface IColumnsProps<T extends IExtractorObject = IExtractorObject> {
  key: keyof (T & IDefaultColumnsProps);
  label: string;
}

export interface ITableProps<T extends IExtractorObject> {
  columns: IColumnsProps<T>[];
  rows: T[];
  rowsProps: {
    rowAction?: (item: T) => void;
    keyExtractor: (item: T) => string | number;
    total?: number;
  };
}
