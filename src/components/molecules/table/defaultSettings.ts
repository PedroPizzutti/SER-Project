export interface IExtractorObject {
  [key: string]: any;
}

export interface IColumnsProps<T extends IExtractorObject> {
  key: keyof T;
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
