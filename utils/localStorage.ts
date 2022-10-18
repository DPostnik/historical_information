export class LocalStorage {
  static set(name: string, value: unknown | string): void {
    const valueFormat =
      typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(name, valueFormat);
  }

  static get(name: string) {
    try {
      const data = localStorage.getItem(name) || '';
      if (data) {
        return data;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  static delete(name: string): void {
    localStorage.removeItem(name);
  }
}
