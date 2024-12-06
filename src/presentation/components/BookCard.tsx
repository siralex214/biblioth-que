import React, { useState } from 'react';
import { Book } from '../../domain/entities/Book';
import { BookOpen, CheckCircle, XCircle, Edit, Trash2, Calendar } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onBorrow: (bookId: string) => void;
  onReturn: (bookId: string) => void;
  onEdit: (book: Book) => void;
  onDelete: (bookId: string) => void;
}

export function BookCard({ book, onBorrow, onReturn, onEdit, onDelete }: BookCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const isOverdue = book.returnDeadline && new Date() > new Date(book.returnDeadline);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-semibold">{book.title}</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(book)}
            className="text-gray-500 hover:text-blue-600"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-gray-500 hover:text-red-600"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="text-gray-600 mb-4">
        <p>Auteur : {book.author}</p>
        <p>ISBN : {book.isbn}</p>
        <div className="flex items-center mt-2">
          <span className="mr-2">Statut :</span>
          {book.isAvailable ? (
            <span className="flex items-center text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Disponible
            </span>
          ) : (
            <span className="flex items-center text-red-600">
              <XCircle className="w-4 h-4 mr-1" />
              Emprunté
            </span>
          )}
        </div>
        {!book.isAvailable && book.borrowedAt && book.returnDeadline && (
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Emprunté le : {formatDate(book.borrowedAt)}</span>
            </div>
            <div className={`flex items-center text-sm ${isOverdue ? 'text-red-600 font-semibold' : ''}`}>
              <Calendar className={`w-4 h-4 mr-1 ${isOverdue ? 'text-red-600' : ''}`} />
              <span>À retourner avant le : {formatDate(book.returnDeadline)}</span>
            </div>
            {isOverdue && (
              <p className="text-red-600 text-sm font-medium">
                Retard de retour !
              </p>
            )}
          </div>
        )}
      </div>
      <div className="mt-auto">
        {showDeleteConfirm ? (
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Êtes-vous sûr de vouloir supprimer ce livre ?</p>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => onDelete(book.id)}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => book.isAvailable ? onBorrow(book.id) : onReturn(book.id)}
            className={`w-full ${
              book.isAvailable
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-green-600 hover:bg-green-700'
            } text-white py-2 px-4 rounded transition-colors`}
          >
            {book.isAvailable ? 'Emprunter' : 'Retourner'}
          </button>
        )}
      </div>
    </div>
  );
}