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
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('open');
        } else {
          entry.target.classList.remove('open');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animated-appear');

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
};

export const IntersectionObserverWrapper = () => {
  useIntersectionObserver();
  return null;
};
