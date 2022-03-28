export interface PaneImplementation {
  name: string
  getInput: (props: any) => Promise<any>
}
