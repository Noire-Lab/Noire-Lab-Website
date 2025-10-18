'use client';
import { Button } from '@/components';
import { useAppStore } from '@/store';
import { check } from '@/svg';
import { Dialog, DialogPanel } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FC,
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.4, // увеличенный порог для более стабильного срабатывания
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('open');
          observer.unobserve(entry.target); // больше не отслеживаем этот элемент
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animated-appear');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export const IntersectionObserverWrapper = () => {
  useIntersectionObserver();
  return null;
};
