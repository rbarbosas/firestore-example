export interface CreateOrUpdateRepository {
  createOrUpdate: (input: CreateOrUpdateRepository.Input) => Promise<CreateOrUpdateRepository.Output>
}

export namespace CreateOrUpdateRepository {
  export type Input = { batch: FirebaseFirestore.WriteBatch, colle: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>, data: any, checkDuplicate: boolean}
  export type Output = String | Error
}