// eslint-disable-next-line no-use-before-define
import React from 'react';

// eslint-disable-next-line import/extensions
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>;
}
